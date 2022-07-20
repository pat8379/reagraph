import React, { FC, useMemo, useState } from 'react';
import { useSpring, a } from '@react-spring/three';
import { Arrow } from './Arrow';
import { Label } from './Label';
import {
  animationConfig,
  getLabelOffsetByType,
  getMidPoint,
  getPoints
} from '../utils';
import { Line } from './Line';
import { Theme } from '../utils';
import { useStore } from '../store';
import { Euler } from 'three';
import { InternalGraphEdge } from '../types';
import { useCursor } from '@react-three/drei';

const LABEL_FONT_SIZE = 6;

/**
 * Label positions relatively edge
 *
 * below: show label under the edge line
 * above: show label above the edge line
 * inline: show label along the edge line
 * natural: normal text positions
 */
export type EdgeLabelPosition = 'below' | 'above' | 'inline' | 'natural';

export interface EdgeProps {
  id: string;
  theme: Theme;
  animated?: boolean;
  disabled?: boolean;
  labelPlacement?: EdgeLabelPosition;
  onClick?: (edge: InternalGraphEdge) => void;
}

export const Edge: FC<EdgeProps> = ({
  id,
  animated,
  theme,
  disabled,
  labelPlacement,
  onClick
}) => {
  const edge = useStore(state => state.edges.find(e => e.id === id));
  const { toId, fromId, label, labelVisible = false, size = 1 } = edge;

  const from = useStore(store => store.nodes.find(node => node.id === fromId));
  const to = useStore(store => store.nodes.find(node => node.id === toId));
  const draggingId = useStore(state => state.draggingId);
  const [isActive, setActive] = useState<boolean>(false);

  const labelOffset = (size + LABEL_FONT_SIZE) / 2;
  const points = useMemo(
    () =>
      getPoints({
        from,
        to: { ...to, size: to.size + size + LABEL_FONT_SIZE }
      }),
    [from, to, size]
  );

  const realPoints = useMemo(() => getPoints({ from, to }), [from, to]);
  const midPoint = useMemo(
    () =>
      getMidPoint(
        { from: from.position, to: to.position },
        getLabelOffsetByType(labelOffset, labelPlacement)
      ),
    [from.position, to.position, labelOffset, labelPlacement]
  );

  const { isSelected, hasSelections, hasSingleSelection } = useStore(state => ({
    hasSingleSelection: state.selections?.length === 1,
    hasSelections: state.selections?.length,
    isSelected:
      state.selections?.includes(fromId) || state.selections?.includes(id)
  }));

  const selectionOpacity = hasSelections
    ? isSelected && hasSingleSelection
      ? 1
      : 0.1
    : 1;

  const [{ labelPosition }] = useSpring(
    () => ({
      from: {
        labelPosition: [0, 0, 0]
      },
      to: {
        labelPosition: [midPoint.x, midPoint.y, midPoint.z]
      },
      config: {
        ...animationConfig,
        duration: animated && !draggingId ? undefined : 0
      }
    }),
    [midPoint, animated, draggingId]
  );

  const labelRotation = useMemo(
    () =>
      new Euler(
        0,
        0,
        labelPlacement === 'natural'
          ? 0
          : Math.atan(
            (to.position.y - from.position.y) /
                (to.position.x - from.position.x)
          )
      ),
    [
      to.position.x,
      to.position.y,
      from.position.x,
      from.position.y,
      labelPlacement
    ]
  );

  useCursor(isActive && !draggingId && onClick !== undefined, 'pointer');

  return (
    <group>
      <Line
        id={id}
        opacity={selectionOpacity}
        points={points}
        size={size}
        animated={animated}
        onActive={setActive}
        color={isSelected || isActive ? theme.edge.activeFill : theme.edge.fill}
        onClick={() => {
          if (!disabled) {
            onClick?.(edge);
          }
        }}
      />
      <Arrow
        position={realPoints}
        opacity={selectionOpacity}
        size={size}
        animated={animated}
        color={
          isSelected || isActive ? theme.arrow.activeFill : theme.arrow.fill
        }
      />
      {labelVisible && label && (
        <a.group position={labelPosition as any} rotation={labelRotation}>
          <Label
            text={label}
            ellipsis={15}
            stroke={theme.edge.label.stroke}
            color={
              isSelected || isActive
                ? theme.edge.label.activeColor
                : theme.edge.label.color
            }
            opacity={selectionOpacity}
            fontSize={LABEL_FONT_SIZE}
          />
        </a.group>
      )}
    </group>
  );
};

Edge.defaultProps = {
  labelPlacement: 'inline'
};

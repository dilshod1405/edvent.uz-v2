'use client'

import React, { useState, useCallback } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow"
import "reactflow/dist/style.css"

const centerNode = {
  id: 'center',
  data: { label: 'Edvent' },
  position: { x: 250, y: 250 },
  style: {
    background: 'linear-gradient(135deg, #7c3aed, #4c1d95)',
    color: 'white',
    fontWeight: '900',
    fontSize: 24,
    padding: 24,
    borderRadius: 24,
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.6)',
    userSelect: 'none',
    cursor: 'default',
  },
  draggable: false,
  selectable: false,
}

const nodesData = [
  {
    id: '1',
    data: { label: 'Talabalar' },
    position: { x: 80, y: 80 },
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: 14,
      borderRadius: 16,
      fontWeight: '700',
      fontSize: 16,
      boxShadow: '0 6px 18px rgba(102, 126, 234, 0.5)',
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
  },
  {
    id: '2',
    data: { label: 'Mentorlar' },
    position: { x: 420, y: 80 },
    style: {
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      color: 'white',
      padding: 14,
      borderRadius: 16,
      fontWeight: '700',
      fontSize: 16,
      boxShadow: '0 6px 18px rgba(246, 211, 101, 0.5)',
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
  },
  {
    id: '3',
    data: { label: 'Imtihonlar' },
    position: { x: 80, y: 420 },
    style: {
      background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
      color: 'white',
      padding: 14,
      borderRadius: 16,
      fontWeight: '700',
      fontSize: 16,
      boxShadow: '0 6px 18px rgba(67, 206, 162, 0.5)',
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
  },
  {
    id: '4',
    data: { label: 'Traininglar' },
    position: { x: 420, y: 420 },
    style: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white',
      padding: 14,
      borderRadius: 16,
      fontWeight: '700',
      fontSize: 16,
      boxShadow: '0 6px 18px rgba(240, 147, 251, 0.5)',
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
  },
  {
    id: '5',
    data: { label: 'Jamoaviy loyihalar' },
    position: { x: 250, y: 500 },
    style: {
      background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
      color: 'white',
      padding: 14,
      borderRadius: 16,
      fontWeight: '700',
      fontSize: 16,
      boxShadow: '0 6px 18px rgba(34, 211, 238, 0.5)',
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
  },
]

const edgesData = nodesData.map((node) => ({
  id: `e-center-${node.id}`,
  source: 'center',
  target: node.id,
  animated: true,
  style: {
    stroke: '#888',
    strokeWidth: 2,
  },
}))

export default function EdventEcosystemMap() {
  const [nodes, setNodes, onNodesChange] = useNodesState([centerNode, ...nodesData])
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesData)

  return (
    <div
      style={{
        width: '100%',
        height: 650,
        background: '#f9fafb',
        borderRadius: 24,
        padding: 20,
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n) => n.style?.background ?? '#ddd'}
          nodeColor={(n) => n.style?.background ?? '#fff'}
          nodeBorderRadius={16}
        />
        <Controls />
        <Background color="#ddd" gap={16} />
      </ReactFlow>
    </div>
  )
}

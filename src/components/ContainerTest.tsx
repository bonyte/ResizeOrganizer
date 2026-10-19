import { useRef } from 'react';
import { useContainerQuery } from '../hooks/useContainerQuery';

export default function ContainerTest() {
  // 1. Create a strongly typed ref pointing to a div element
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 2. Pass the ref into your custom container query hook
  const { width, height, category } = useContainerQuery(containerRef);

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h2>🧪 Element-Level Container Query Test</h2>
      <p>Drag the bottom-right corner of the box below to resize it and test your hook!</p>

      {/* 3. Attach the ref and enable manual resizing via CSS */}
      <div
        ref={containerRef}
        style={{
          width: '600px',
          height: '250px',
          resize: 'both',
          overflow: 'auto',
          border: '3px dashed #4f46e5',
          borderRadius: '8px',
          padding: '20px',
          background: '#f8fafc',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3>Resizable Box Container</h3>
        <p>Current Width: <strong>{Math.round(width)}px</strong></p>
        <p>Current Height: <strong>{Math.round(height)}px</strong></p>
        <p>
          Active Category:{' '}
          <span
            style={{
              background: category === 'compact' ? '#fee2e2' : category === 'split-screen' ? '#fef3c7' : '#dcfce7',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            {category}
          </span>
        </p>
      </div>
    </div>
  );
}
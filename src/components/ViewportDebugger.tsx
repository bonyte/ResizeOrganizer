import { useWindowSize } from '../hooks/useWindowSize';

export default function ViewportDebugger() {
  const { width, height, category } = useWindowSize();

  // Simple background color helper for visual feedback
  const getBadgeBackground = (cat: string) => {
    switch (cat) {
      case 'compact': return '#ffebee'; // Soft red
      case 'split-screen': return '#fffde7'; // Soft yellow
      default: return '#e8f5e9'; // Soft green
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#ffffff',
      color: '#111',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      fontFamily: 'monospace',
      fontSize: '13px',
      zIndex: 9999,
      border: '1px solid #ccc'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
        📐 Viewport Debugger
      </div>
      <div>Width: <strong>{width}px</strong></div>
      <div>Height: <strong>{height}px</strong></div>
      <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Mode:</span>
        <span style={{
          background: getBadgeBackground(category),
          padding: '2px 6px',
          borderRadius: '4px',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          {category}
        </span>
      </div>
    </div>
  );
}
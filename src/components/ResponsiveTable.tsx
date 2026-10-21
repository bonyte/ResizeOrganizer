import { useRef } from 'react';
import { useContainerQuery } from '../hooks/useContainerQuery';

interface UserRecord {
  id: number;
  name: string;
  role: string;
  status: 'Active' | 'Pending' | 'Offline';
  lastLogin: string;
}

const MOCK_DATA: UserRecord[] = [
  { id: 1, name: 'Alice Smith', role: 'Frontend Engineer', status: 'Active', lastLogin: 'Today' },
  { id: 2, name: 'Bob Jones', role: 'Backend Developer', status: 'Pending', lastLogin: '2 days ago' },
  { id: 3, name: 'Charlie Davis', role: 'DevOps Specialist', status: 'Active', lastLogin: 'Yesterday' },
];

export default function ResponsiveTable() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { category, width } = useContainerQuery(containerRef);

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h2>📊 Adaptive Data Table Showcase</h2>
      <p style={{ color: '#110f0f', fontSize: '14px' }}>
        Current Container Width: <strong>{Math.round(width)}px</strong> | Active Layout:{' '}
        <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{category}</span>
      </p>

      {/* The observed container */}
      <div
        ref={containerRef}
        style={{
          resize: 'horizontal',
          overflow: 'auto',
          border: '2px solid #cbd5e1',
          borderRadius: '8px',
          padding: '16px',
          background: '#ffffff',
          minWidth: '300px',
          maxWidth: '100%',
        }}
      >
        {/* CONDITIONAL RENDERING BASED ON CONTAINER CATEGORY */}
        {category === 'compact' ? (
          /* --- COMPACT VIEW: Stacked Cards --- */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '12px', color: '#888', fontStyle: 'italic' }}>
              📱 Rendered as Card Stack (Compact Mode)
            </div>
            {MOCK_DATA.map((row) => (
              <div
                key={row.id}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  padding: '12px',
                  background: '#f8fafc',
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '4px' }}>
                  {row.name}
                </div>
                <div style={{ fontSize: '13px', color: '#475569' }}>Role: {row.role}</div>
                <div style={{ fontSize: '13px', color: '#475569' }}>Status: {row.status}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>
                  Last Login: {row.lastLogin}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- FULL / SPLIT-SCREEN VIEW: Standard Table --- */
          <div>
            <div style={{ fontSize: '12px', color: '#888', fontStyle: 'italic', marginBottom: '8px' }}>
              💻 Rendered as Traditional Table ({category} mode)
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569' }}>
                  <th style={{ padding: '8px' }}>Name</th>
                  <th style={{ padding: '8px' }}>Role</th>
                  <th style={{ padding: '8px' }}>Status</th>
                  <th style={{ padding: '8px' }}>Last Login</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DATA.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '8px', fontWeight: '500' }}>{row.name}</td>
                    <td style={{ padding: '8px', color: '#475569' }}>{row.role}</td>
                    <td style={{ padding: '8px' }}>
                      <span
                        style={{
                          background: row.status === 'Active' ? '#dcfce7' : '#fef3c7',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '12px',
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '8px', color: '#64748b' }}>{row.lastLogin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
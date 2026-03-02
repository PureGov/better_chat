import React, { useState } from 'react';
import { ConfigPanel } from './components/ConfigPanel';
import { ChatArea } from './components/ChatArea';
import { getDefaultConfig } from './configSchema';

export default function App() {
  const [config, setConfig] = useState<Record<string, any>>(getDefaultConfig());

  const handleConfigChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <ConfigPanel config={config} onChange={handleConfigChange} />
      <ChatArea config={config} />
    </div>
  );
}

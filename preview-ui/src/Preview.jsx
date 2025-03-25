import { Terminal } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export default function ITerm2Terminal() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4 text-green-400" />
          <span className="text-sm">iTerm2</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-gray-800 px-4">
        <Tabs defaultValue="terminal" className="w-full">
          <TabsList className="bg-transparent">
            <TabsTrigger value="terminal" className="text-xs">
              Terminal
            </TabsTrigger>
            <TabsTrigger value="shell" className="text-xs">
              Shell
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-xs">
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-4 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="space-y-2">
            <div className="flex">
              <span className="text-green-400">user@macbook ~ %</span>
              <span className="ml-2">ls -la</span>
            </div>
            <div className="text-gray-400">
              <div>drwxr-xr-x  12 user  staff   384 Jan 10 10:30 .</div>
              <div>drwxr-xr-x   5 user  staff   160 Jan  5 09:15 ..</div>
              <div>-rw-r--r--   1 user  staff   284 Jan  8 14:22 .bash_profile</div>
              <div>drwxr-xr-x  13 user  staff   416 Jan  9 11:45 .config</div>
              <div>drwxr-xr-x   3 user  staff    96 Jan  7 16:30 Documents</div>
              <div>drwxr-xr-x   4 user  staff   128 Jan  6 13:20 Downloads</div>
            </div>

            <div className="flex mt-4">
              <span className="text-green-400">user@macbook ~ %</span>
              <span className="ml-2">git status</span>
            </div>
            <div className="text-gray-400">
              <div>On branch main</div>
              <div>Your branch is up to date with 'origin/main'.</div>
              <div className="text-yellow-400">Changes not staged for commit:</div>
              <div className="ml-4">modified:   src/components/terminal.tsx</div>
            </div>

            <div className="flex mt-4">
              <span className="text-green-400">user@macbook ~ %</span>
              <span className="ml-2">node -v</span>
            </div>
            <div className="text-gray-400">v18.12.1</div>

            <div className="flex mt-4">
              <span className="text-green-400">user@macbook ~ %</span>
              <span className="ml-2">npm run dev</span>
            </div>
            <div className="text-gray-400">
              <div>ready - started server on 0.0.0.0:3000, url: http://localhost:3000</div>
              <div>event - compiled client and server successfully in 187 ms (259 modules)</div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <Input
            className="flex-1 bg-gray-900 border-gray-700 text-gray-100 focus-visible:ring-green-500"
            placeholder="Type a command..."
          />
          <Button variant="ghost" className="ml-2 text-gray-400 hover:text-gray-100">
            Run
          </Button>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-t border-gray-700 text-xs text-gray-400">
        <div>zsh</div>
        <div className="flex space-x-4">
          <div>UTF-8</div>
          <div>100%</div>
          <div>10:42 AM</div>
        </div>
      </div>
    </div>
  );
}
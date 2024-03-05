import { ThemeProvider } from "@/components/theme-provider"

import { Input } from "@/components/ui/input"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-[500px]">
       <Input type="text" placeholder="Filter tasks..." />
    </div>
    </ThemeProvider>
    
  )
}

export default App



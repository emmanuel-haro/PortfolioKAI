import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Add all custom routes above the catch-all "*" route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </TooltipProvider>
);

export default App;

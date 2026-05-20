import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ForOrganizations from "./pages/ForOrganizations";
import ForIndividuals from "./pages/ForIndividuals";
import CategoryPage from "./pages/CategoryPage";
import CityPage from "./pages/CityPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Custom404 from "./pages/Custom404";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dlya-organizaciy" element={<ForOrganizations />} />
          <Route path="/dlya-fizlic" element={<ForIndividuals />} />

          {/* Категории техники */}
          <Route path="/noutbuki" element={<CategoryPage />} />
          <Route path="/kompyutery" element={<CategoryPage />} />
          <Route path="/telefony" element={<CategoryPage />} />
          <Route path="/monitory" element={<CategoryPage />} />
          <Route path="/orgtehnika" element={<CategoryPage />} />

          {/* Города */}
          <Route path="/moskva" element={<CityPage />} />
          <Route path="/spb" element={<CityPage />} />
          <Route path="/kazan" element={<CityPage />} />
          <Route path="/ekb" element={<CityPage />} />
          <Route path="/novosibirsk" element={<CityPage />} />

          {/* Блог */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

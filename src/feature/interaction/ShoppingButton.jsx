"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShoppingButton = () => {
  return (
    <Button variant="ghost" size="icon" className="" aria-label="Shopping Cart">
      <ShoppingCart className="h-6 w-6" />
      <span className="sr-only">Shopping Cart</span>
    </Button>
  );
};

export default ShoppingButton;

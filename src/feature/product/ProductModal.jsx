"use client";

import { Icons } from "@/components/ui/icons";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DialogClose } from "@/components/ui/dialog";

export function ProductModal({ data }) {
  const { toast } = useToast();

  return (
    <Card className="max-w-lg mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-semibold">{data.name}</CardTitle>
        <CardDescription className="">{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <p className="text-lg font-medium">
          {data?.price && <span className="mr-2">${data.price}</span>}
          {data?.category && (
            <span className="text-sm ">({data.category})</span>
          )}
        </p>
        <img
          src={data.images?.[0] || "/img/product_placeholder.png"}
          alt={data.name}
          className="w-full h-auto object-cover object-center"
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              description: "Your message has been sent.",
            });
          }}
        >
          Add to cart
        </Button>
        <Button variant="outline">Buy now</Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </CardFooter>
    </Card>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ProductModal } from "./ProductModal";

const ProductCard = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="rounded-lg border-2 cursor-pointer">
          <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <Image
                src={data.images?.[0] || "/img/product_placeholder.png"}
                alt=""
                fill
                className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">{data.name}</p>
              <p className="text-sm text-primary/80">{data.category}</p>
            </div>
            <div className="flex items-center justify-between">
              {data?.price}
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <ProductModal data={data} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;

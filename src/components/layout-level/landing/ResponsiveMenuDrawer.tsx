"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { X } from "lucide-react";
import Link from "next/link";
import { Drawer } from "vaul";
import { FC } from "react";
import Image from "next/image";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ResponsiveMenuDrawer = () => {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="bg-background flex flex-col h-full max-xxs:w-full w-full xs:w-[400px] mt-24 fixed bottom-0 right-0 z-50 overflow-y-auto overflow-x-hidden">
        <div className="p-4 bg-background/80 flex-1 h-full">
          <div className="max-w-md mx-auto">
            <Drawer.Title className="font-medium mb-4 flex-grow flex items-center justify-between">
              <Link href="">
                <Image src="/assets/images/final_brandfluenza-03.webp" alt="Brandfluenza Logo" width={100} height={35} className="margin_left max-w-[130px]" />
              </Link>
              <Drawer.Close>
                <X className="color_orange" />
              </Drawer.Close>
            </Drawer.Title>
            <NavigationMenu className="flex flex-col items-start max-w-full flex-1">
              <NavigationMenuList className="py-4">
                <NavigationMenuLink className="text-sm color_custom" onClick={() => scrollToSection("features-section")}>
                  Benefit
                </NavigationMenuLink>
              </NavigationMenuList>
              <NavigationMenuList className="py-4">
                <NavigationMenuLink className="text-sm color_custom" onClick={() => scrollToSection("how-it-works")}>
                  How it Works
                </NavigationMenuLink>
              </NavigationMenuList>
              <NavigationMenuList className="py-4">
                <NavigationMenuLink className="text-sm color_custom" onClick={() => scrollToSection("faq")}>
                  Faqs
                </NavigationMenuLink>
              </NavigationMenuList>
              <NavigationMenuList className="py-4">
                <NavigationMenuLink className="text-sm color_custom" onClick={() => scrollToSection("company")}>
                  Company
                </NavigationMenuLink>
              </NavigationMenuList>
              <NavigationMenuList className="py-4">
                <NavigationMenuLink className="text-sm">
                  Get the App
                </NavigationMenuLink>
              </NavigationMenuList>
              <NavigationMenuLink>
                <div className="action-part flex items-center gap-4">
                  <Image src="/assets/images/play-store.svg" alt="Play Store" width={135} height={40} className="max-w-[130px]" />
                  <Image src="/assets/images/app-store.svg" alt="App Store" width={135} height={40} className="max-w-[130px]" />
                </div>
              </NavigationMenuLink>
            </NavigationMenu>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  );
};

export default ResponsiveMenuDrawer;

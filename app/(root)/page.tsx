"use client";

import { Modal } from "@/components/ui/modal";

import { useEffect } from "react";
//import { useParams } from "next/navigation";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  //return null;
  
  return(
    <div className="p-4">
      Root Page  
    </div>
  );
}
 
export default SetupPage;

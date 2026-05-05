import { Spinner } from "@heroui/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return <div className="flex flex-col items-center gap-2 mt-20">
                            <Spinner color="success" />
                       </div> 
}
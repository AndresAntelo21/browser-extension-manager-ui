import { useState } from "react";
import Button from "@/shared/components/buttons/button";

const extensionFilters = ["All", "Active", "Inactive"] as const;
type ExtensionFilter = (typeof extensionFilters)[number];

export default function ExtensionsList() {
  const [selectedFilter, setSelectedFilter] = useState<ExtensionFilter>("All");

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full justify-center">
        <h2 className="text-preset-1 dark:text-neutral-0 text-neutral-900">
          Extensions List
        </h2>
      </div>
      <nav aria-label="Filter extensions" className="flex gap-3">
        {extensionFilters.map((filter) => (
          <Button
            key={filter}
            active={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </nav>
    </div>
  );
}

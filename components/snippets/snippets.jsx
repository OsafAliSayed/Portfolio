import { CommonCard } from "../common/common-card";
import { snippets } from "@/lib/constants";

export default function Snippets() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {snippets.map((snippet, index) => (
                <CommonCard 
                    key={index}
                    {...snippet} 
                />
            ))}
        </div>
    );
}
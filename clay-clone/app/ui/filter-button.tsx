import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allDepartments } from "./jobs";

export const getAllLocations = () => {
    const locationMap = new Map();

    allDepartments.forEach(department => {
        department.jobs.forEach(job => {
            if (!locationMap.has(job.location)) {
                locationMap.set(job.location, true);
            }
        });
    });

    return Array.from(locationMap.keys());
}

export const FilterButton = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="">Filter open positions</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Filters:</h4>
                        <p className="text-sm text-muted-foreground">
                            Apply filters based on location, job type and department
                        </p>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Department" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Departments</SelectLabel>
                                {allDepartments.map((department, depIndex) => (
                                    <SelectItem key={depIndex} value={department.name}>{department.name}</SelectItem>
                                ))}

                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Locations</SelectLabel>
                                <SelectItem value="all-locations">All Locations</SelectItem>
                                {getAllLocations().map((location, locIndex) => (
                                    <SelectItem key={locIndex} value={location}>{location}</SelectItem>
                                ))}

                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Type</SelectLabel>
                                <SelectItem value="type">All Employment Types</SelectItem>
                                <SelectItem value="full-time">Full Time</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </PopoverContent>
        </Popover>
    );
}
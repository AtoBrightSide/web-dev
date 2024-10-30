'use client'
import { useState, useEffect } from "react";
import { JobPostCard } from "./cards";
import { FilterButton, getAllLocations } from "./filter-button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import useIntersectionObserver from "../hooks/intersection-hooks";
import { useInView } from "react-intersection-observer";

export interface Job {
    title: string;
    department: string;
    location: string;
    type: string;
}

export interface Department {
    name: string;
    jobs: Job[];
}

export const allDepartments: Department[] = [
    {
        name: "Any",
        jobs: [
            {
                title: "Create Your Own Role",
                department: "Any",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    },
    {
        name: "CX",
        jobs: [
            {
                title: "Enterprise Growth Strategist",
                department: "CX",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Product Support Specialist",
                department: "CX",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    },
    {
        name: "Data",
        jobs: [
            {
                title: "Data Scientist",
                department: "Data",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    },
    {
        name: "Engineering",
        jobs: [
            {
                title: "Head of Engineering",
                department: "Engineering",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Machine Learning Engineer",
                department: "Engineering",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Senior Software Engineer, AI",
                department: "Engineering",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Senior Software Engineer, Backend",
                department: "Engineering",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Senior Software Engineer, Infrastructure",
                department: "Engineering",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Senior Software Engineer, Growth",
                department: "Engineering",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Senior Software Engineer, Data Platform",
                department: "Engineering",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    },
    {
        name: "G&A",
        jobs: [
            {
                title: "Chief of Staff",
                department: "G&A",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Executive Assistant",
                department: "G&A",
                location: "Clay, HQ",
                type: "Full time"
            },
            {
                title: "Office Manager",
                department: "G&A",
                location: "Clay, HQ",
                type: "Full time"
            },
            {
                title: "Strategic Finance",
                department: "G&A",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    },
    {
        name: "GTM",
        jobs: [
            {
                title: "Go-to-market Engineer",
                department: "GTM",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    },
    {
        name: "Marketing",
        jobs: [
            {
                title: "Enterprise Demand Generation",
                department: "Marketing",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    },
    {
        name: "Product & Design",
        jobs: [
            {
                title: "Senior Product Designer",
                department: "Product & Design",
                location: "New York, NY",
                type: "Full time"
            },
            {
                title: "Staff Product Designer",
                department: "G&A",
                location: "New York, NY",
                type: "Full time"
            }
        ]
    }
];

const totalJobCount = allDepartments.reduce((total, curr) => total + curr.jobs.length, 0)

const Filters = () => {
    return (
        <div className="w-full flex gap-x-1">
            <Select>
                <SelectTrigger className="w-1/3">
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
                <SelectTrigger className="w-1/3">
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
                <SelectTrigger className="w-1/3">
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
    )
}

export const Jobs = () => {
    const { ref: containerRef, inView: isVisible } = useInView();
    const [innerWidth, setInnerWidth] = useState<number>(0);
    useEffect(() => {
        const handleWindowResize = () => {
            setInnerWidth(window.innerWidth);
        };

        // Set the initial width
        setInnerWidth(window.innerWidth);

        // Update width on resize
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div className={`bg-white w-screen h-full flex flex-col items-center mt-20`}>
            <div ref={containerRef} className={`w-4/5 md:w-3/5 h-fit flex flex-col items-center text-center  gap-y-5 md:px-4 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                <div className="text-3xl md:text-7xl font-semibold md:font-bold md:mb-2">Open Jobs</div>
                <div className="w-full text-start">Open Positions({totalJobCount})</div>
                <div className="block md:hidden"><FilterButton /></div>
                <div className="hidden md:flex w-full flex-col mb-10">
                    <div className="text-sm font-light text-start">Filters:</div>
                    <Filters />
                </div>
            </div>
            <div className="w-4/5 md:w-3/5 flex flex-col gap-y-8 md:flex md:flex-wrap md:justify-center">
                {allDepartments.flatMap((department, depIndex) => (
                    <div key={depIndex} className={``}>
                        <div className="text-sm font-semibold ml-2 mb-1">{department.name}</div>
                        {department.jobs.map((job, jobIndex) => (
                            <div key={`${depIndex}-${jobIndex}`} className={`w-full h-24 flex justify-center text-sm mb-4 ${innerWidth < 768 ? "" : "border-r"} border-gray-300 `} >
                                <JobPostCard props={job} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
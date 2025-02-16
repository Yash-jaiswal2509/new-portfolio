"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
    date?: Date;
    onChange?: (date?: Date) => void;
}

export function DatePicker({ date, onChange }: DatePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-gray-400",
                        "border-white/10 hover:border-white/20 bg-transparent text-white"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-zinc-900 border-white/10">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onChange}
                    initialFocus
                    className="bg-zinc-900"
                    classNames={{
                        months: "text-white",
                        month: "text-white",
                        caption: "text-white",
                        caption_label: "text-white",
                        nav_button_previous: "text-white hover:text-gray-300",
                        nav_button_next: "text-white hover:text-gray-300",
                        head_cell: "text-gray-400",
                        cell: "text-white hover:bg-zinc-800 focus:bg-zinc-800",
                        day_selected: "bg-blue-600 hover:bg-blue-700 text-white",
                        day_today: "bg-zinc-800 text-white",
                        day_outside: "text-gray-500",
                        day_disabled: "text-gray-500",
                        day_range_middle: "bg-zinc-800",
                        day_hidden: "invisible",
                    }}
                />
            </PopoverContent>
        </Popover>
    );
} 
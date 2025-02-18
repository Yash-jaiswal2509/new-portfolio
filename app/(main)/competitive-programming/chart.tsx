"use client";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

const options = {
    responsive: true,
    cutout: "70%",
    animation: {
        duration: 2000,
        easing: "easeInOutQuart" as const,
        animateRotate: true,
        animateScale: true,
    },
    plugins: {
        legend: {
            display: true,
            position: "right" as const,
        },
    },
};

type ChartProps = {
    cfProblemSolved: number;
    leetcodeProblemSolved: number;
    codeChefProblemSolved: number;
    geekForGeeksProblemSolved: number;
};

export const Chart = ({ cfProblemSolved, leetcodeProblemSolved, codeChefProblemSolved, geekForGeeksProblemSolved }: ChartProps) => {
    const [chartData, setChartData] = useState({
        labels: ["Codeforces", "LeetCode", "CodeChef", "GeekForGeeks"],
        datasets: [
            {
                label: "Problems Solved",
                data: [0, 0, 0, 0],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                hoverOffset: 10,
            },
        ],
    });

    const totalProblemSolved = cfProblemSolved + leetcodeProblemSolved + codeChefProblemSolved + geekForGeeksProblemSolved;

    useEffect(() => {
        const totalSteps = 50;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            setChartData({
                labels: ["Codeforces", "LeetCode", "CodeChef", "GeekForGeeks"],
                datasets: [
                    {
                        label: "Problems Solved",
                        data: [
                            (cfProblemSolved * currentStep) / totalSteps,
                            (leetcodeProblemSolved * currentStep) / totalSteps,
                            (codeChefProblemSolved * currentStep) / totalSteps,
                            (geekForGeeksProblemSolved * currentStep) / totalSteps,
                        ],
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                        hoverOffset: 10,
                    },
                ],
            });

            if (currentStep >= totalSteps) {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row sm:gap-10 items-center">
            <div className="my-auto">
                <Doughnut options={options} data={chartData} className="w-76 h-76 lg:w-96 lg:h-96" />
            </div>
            <div className="flex items-center gap-4">
                <div className="text-sm sm:text-base my-auto space-y-2">
                    <h1>Codeforces: {cfProblemSolved}</h1>
                    <h1>LeetCode: {leetcodeProblemSolved}</h1>
                    <h1>CodeChef: {codeChefProblemSolved}</h1>
                    <h1>GeekForGeeks: {geekForGeeksProblemSolved}</h1>
                </div>
                <div className="text-lg sm:text-xl text-center font-bold">
                    <h1>Total Problems</h1>
                    <p>{totalProblemSolved}</p>
                </div>
            </div>
        </div>
    );
};

"use client";

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import AddAchievementForm from "./add-achievement-form";

const AddAchievement = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <Card className="bg-transparent text-white flex flex-col justify-between">
            <CardHeader>
                <CardTitle>Add Achievement</CardTitle>
                <CardDescription>Add your achievement to showcase enhance your profile automatically</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="bg-blue-500 w-full" onClick={() => setShow(true)}>Create Form</Button>
            </CardContent>
            <AddAchievementForm show={show} setShow={setShow} />
        </Card>
    )
}

export default AddAchievement;
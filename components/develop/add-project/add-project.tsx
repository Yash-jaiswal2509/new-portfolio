"use client";

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import AddProjectForm from "./add-project-form";

const AddProject = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <Card className="bg-transparent text-white flex flex-col justify-between">
            <CardHeader>
                <CardTitle>Add Project</CardTitle>
                <CardDescription>Add your project to showcase your work automatically</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="bg-blue-500 w-full" onClick={() => setShow(true)}>Create Form</Button>
            </CardContent>
            <AddProjectForm show={show} setShow={setShow} />
        </Card>
    )
}

export default AddProject;
import React from "react";
import { WindowContent, Button, Toolbar, Panel, Avatar, TextInput } from "react95";
import useForm, { CheckForm } from "../../hooks/useForm";
import AlertWin from "../AlertWindow"
import useStore from "../../store";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
export default function ContactMe(props) {
    const AddWindow = useStore((state) => state.AddWindow);
    const onError = (text) => {
        AddWindow("Error", AlertWin, 220, 300, { text, error: true })
    }
    const onSuccess = () => {
        AddWindow("Success", AlertWin, 220, 300, { text: ["your massage have been sent :)"], error: false })
    }
    const { values, HandelChange } = useForm({
        email: "",
        title: "",
        msg: ""
    })

    const HandelSubmit = async () => {
        const Errors = CheckForm(values)
        if (Errors.length > 0) {
            console.log(Errors)
            onError(Errors)
        } else {

            try {
                const docRef = await addDoc(collection(db, "msgs"), {
                    email: values.email,
                    title: values.title,
                    msg: values.msg
                });
                console.log("Document written with ID: ", docRef.id);
                onSuccess()
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }


    return (
        <div>
            <Toolbar>
                <Button variant="menu" size="sm">
                    File
                </Button>
                <Button variant="menu" size="sm">
                    Edit
                </Button>
                <Button variant="menu" size="sm" >
                    Save
                </Button>
            </Toolbar>
            <WindowContent >
                <div style={{ width: "100%", display: "flex", gap: 15, marginBottom: 10 }}>
                    <p style={{ width: 100 }}>
                        Email
                    </p>
                    <TextInput
                        value={values.email}
                        name="email"
                        onChange={HandelChange}
                        fullWidth
                    />
                </div>
                <div style={{ width: "100%", display: "flex", gap: 15, marginBottom: 10 }}>
                    <p style={{ width: 100 }}>
                        Title
                    </p>
                    <TextInput
                        value={values.title}
                        name="title"
                        onChange={HandelChange}
                        fullWidth
                    />
                </div>

                <div style={{ width: "100%", display: "flex", gap: 15, marginBottom: 10 }}>
                    <p style={{ width: 100 }}>
                        Massage
                    </p>
                    <TextInput
                        value={values.msg}
                        multiline rows={4}
                        name="msg"
                        onChange={HandelChange}
                        fullWidth
                    />
                </div>
                <div style={{ width: "100%", display: "flex", gap: 15, marginBottom: 10, alignItems: "center", justifyContent: "center" }}>
                    <Button size='lg' style={{ width: 300 }} onClick={HandelSubmit}>
                        Send
                    </Button>
                </div>


            </WindowContent>
            {/* <Panel variant="well" className="footer">
                Put some useful informations here
            </Panel> */}
        </div>
    );
}

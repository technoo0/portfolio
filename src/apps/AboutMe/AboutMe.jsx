import React from "react";
import { WindowContent, Button, Toolbar, Panel, Avatar, Anchor } from "react95";
import PorfilePhoto from "../../assets/images/PorfilePhoto.jpg"
import Githubicon from "../../assets/images/githubicon.png"
import linkedInicon from "../../assets/images/linkedIn.png"
export default function AboutMe(props) {
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
                <Avatar src={PorfilePhoto} size={200} />
                <h1>hi ! i'm Marwan.</h1>
                <p>I'm enthusiastic, fast learner, and passionate <strong>Full Stack Web Developer</strong>. Eager to learn new <br />
                    technologies and skills and apply them in the real world. I love solving problems and finding<br />
                    creative solutions and am always up for new challenges</p>

                <div style={{ display: "flex", gap: 20 }}>

                    <Anchor href='https://github.com/technoo0/' target='_blank' style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <img src={Githubicon} height={25} width={27} />  My GitHub
                    </Anchor>
                    <Anchor href='https://www.linkedin.com/in/marwan-fouda-6818a51aa' target='_blank' style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <img src={linkedInicon} height={25} width={27} />  My LinkedIn
                    </Anchor>
                </div>

            </WindowContent>
            {/* <Panel variant="well" className="footer">
                Put some useful informations here
            </Panel> */}
        </div>
    );
}

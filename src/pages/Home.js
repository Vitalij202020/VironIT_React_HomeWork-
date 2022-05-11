import React from 'react';
import {Container, Typography} from "@mui/material";

const Home = (props) => {
    return (
        <div>
            <Container>
                <Typography sx={{marginTop: "20px"}} align={"center"} variant="h3" gutterBottom component="div">Welcome to Home page</Typography>
                <Typography align={"center"}>
                    <img style={{maxWidth: "70vh", borderRadius: 4}} src="https://facultetus.ru/images/activities/33702activity21f0eb6865728f06f379a3bf82364c18.jpg?create=img" alt=""/>
                </Typography>
                <Typography align={"center"} variant={"body1"} gutterBottom sx={{marginTop: "20px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam, aliquid aperiam
                    architecto asperiores aspernatur beatae corporis cum debitis dolorem doloribus ea et eum eveniet
                    explicabo fugit harum hic id laboriosam magni modi necessitatibus nihil nostrum, obcaecati
                    praesentium quasi, quod ratione repellendus sequi sit sunt ut vero. Debitis deserunt maxime
                    recusandae tempora voluptates. Asperiores illo similique temporibus voluptate? Architecto distinctio
                    dolorum eaque necessitatibus nemo placeat sapiente voluptate. Architecto autem commodi delectus
                    doloremque doloribus eos, eum expedita fugiat in iure, odio praesentium quis quisquam quod sequi sit
                    tenetur voluptatem. Accusantium at expedita hic perferendis placeat quae recusandae tempora tenetur.
                    Aspernatur corporis earum eius libero optio recusandae totam, vitae. Aspernatur doloremque eum
                    expedita ipsum maiores nesciunt officia quam sint! Aliquam asperiores delectus doloremque ea eius
                    eum exercitationem magni non. Aperiam deserunt distinctio, dolor id laborum molestias, nobis odit
                    optio placeat quam quo quod quos reiciendis repellat repudiandae similique temporibus ullam. Amet
                    aperiam atque consequuntur, eius error exercitationem, illo illum incidunt ipsum maiores officia
                    perferendis praesentium quae quasi ratione repellat, repudiandae soluta voluptatum. Aperiam
                    asperiores assumenda blanditiis culpa, dignissimos esse est expedita harum iusto labore, libero
                    maiores molestias nesciunt porro quibusdam quidem repellendus rerum saepe sed soluta suscipit
                    tenetur unde vitae? Minima!
                </Typography>
            </Container>
        </div>
    );
};

export default Home;
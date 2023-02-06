import React from "react";
import Bolder from "./Bolder";

function Preparation() {
    const copyright = "©Copyright 1973 by The McCall Publishing Co. All rights reserved. Printed in U.S.A.";
    const copyleft = "©Copyleft 2023 by MotoMarcin. No rights reserved. Made in Poland.";
    console.log(copyleft);
    const servingSize = "Makes 8 servings.";
    const preparation = [
        {
            instruction: "In small saucepan, combine gelatine, sugar, and salt; mix well.",
        },
        {
            instruction: `Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat.`,
        },
        {
            instruction: `Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white.\n`,
        },
        {
            instruction: `Add carrot, celery, cabbage, green pepper, and pimiento; stir until well combined.`,
        },
        {
            instruction: `Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm.`,
        },
        {
            instruction: `To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. refrigerate until ready to serve.`,
        }
    ]
    const preparationList = preparation.map(step =>
        <li key={step.instruction} className="preparation">{Bolder(step.instruction)}</li>);
    return (
        <div>
            <h2>
                Preparation
            </h2>

            <ol>{preparationList}</ol>

            <p className="serving">{servingSize}</p>
            <br/>
            <p className="copyright">{copyright}</p>

        </div>
    );
}

export default Preparation
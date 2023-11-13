"use client"
import { todoAtom } from "@/recoil/atoms/todo";
import React from "react";
import { useRecoilValue } from "recoil";

type Props = {};

const About = (props: Props) => {
  
	const todo = useRecoilValue(todoAtom);

	return (
		<div>
			About:{" "}
			{todo.map((props, index) => (
				<>{props}</>
			))}
		</div>
	);
};

export default About;

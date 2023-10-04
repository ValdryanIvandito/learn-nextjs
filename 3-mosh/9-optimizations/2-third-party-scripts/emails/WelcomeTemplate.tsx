import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
        {/* <Body style={body}> Using CSS Styling */}
        <Body className="bg-slate-200">
          <div className="pl-4">
            {/* <Text style={heading}> Using CSS Styling */}
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="http://codewithmosh.com">www.codewithmosh.com</Link>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;

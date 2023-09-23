import Image from "next/image";

function UserProfile(props) {
  return (
    <>
      <h1>{props.username}</h1>
    
      {/* <img
        src="/images/catcute.jpg"
        alt="beluga cat"
        style={{ heigh:"400px", width: "200px" }}
      /> */}

      {/* Instead use img html element, we should use Image component for optimization */}
      <Image
        src="/images/catcute.jpg"
        alt="beluga cat"
        height={400}
        width={200}
      />
    </>
  );
}

export default UserProfile;

// This function is run on the server-side when the client makes a request
export async function getServerSideProps(context) {
  // const { req } = context;
  // console.log(req);

  return {
    props: {
      username: "Valdryan Ivandito",
    },
  };
}

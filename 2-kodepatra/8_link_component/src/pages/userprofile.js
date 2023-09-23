function UserProfile(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfile;

// This function is run on the server-side when the client makes a request
export async function getServerSideProps(context) {
  const { req } = context;
  console.log(req);

  return {
    props: {
      username: "Valdryan Ivandito",
    },
  };
}

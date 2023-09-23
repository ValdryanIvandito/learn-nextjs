function UserId(props) {
    return <h1>This is page for user id: {props.id}</h1>
}

export default UserId;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.user_id;

  return {
    props: {
      id: userId,
    },
  };
}

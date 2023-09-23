import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const username = "admin";
const password = "WK2ojvusGY4GOB3y";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/f/fd/Caf%C3%A9_de_Flore.jpg",
//     address: "172 Bd Saint-Germain, 75006 Paris, Prancis",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/f/fd/Caf%C3%A9_de_Flore.jpg",
//     address: "172 Bd Saint-Germain, 75006 Paris, Prancis",
//     description: "This is a Second meetup!",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/f/fd/Caf%C3%A9_de_Flore.jpg",
//     address: "172 Bd Saint-Germain, 75006 Paris, Prancis",
//     description: "This is a Third meetup!",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.rxwsbnm.mongodb.net/learn_nextjs?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    // revalidate: 10,
    revalidate: 1,
  };
}

// another alternative to using getStaticProps
// getServerSideProps only run on server-side, it could use for credential data that should not client/user to see it
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;

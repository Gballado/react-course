import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    // Create a post request to firebase
    fetch(
      "https://react-getting-started-488e1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST', 
        body: JSON.stringify(meetupData),
        headers:{
          'Conetent-Type': 'application/json'
        }
      }
    );
  }

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

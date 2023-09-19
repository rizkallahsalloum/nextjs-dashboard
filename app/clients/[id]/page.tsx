async function getRequest(id: number | string) {
  const res = await fetch(`http://localhost:4000/ClientsRequests/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

interface SingleClientProps {
  params: {
    id: number;
  };
}

async function SingleClient({ params }: SingleClientProps) {
  const singleRequest = await getRequest(params.id);
  return (
    <>
      <div>
        <h5>{singleRequest.name}</h5>
        <ol>
          {singleRequest.comments.map((comment: any, index: number) => (
            <li key={index}>{comment}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default SingleClient;

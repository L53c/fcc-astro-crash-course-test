
export async function GET() {

  return new Response(
    JSON.stringify({msg: 'Hello Ayatima'}),{
      status: 200,
      headers: {
        'Content-Type':'application/json'
      }
    }
  )
}

export async function POST() {

  return new Response(
    JSON.stringify({msg: 'Hello Ayatima'}),{
      status: 200,
      headers: {
        'Content-Type':'application/json'
      }
    }
  )
}
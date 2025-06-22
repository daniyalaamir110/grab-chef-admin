// // app/api/fetch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const BASE_API_URL = 'http://51.21.231.42:3000/api';

const getTokenFromCookies = (req: NextRequest) => {
  return (
    req.cookies.get('token')?.value ||
    req.cookies.get('accessToken')?.value ||
    ''
  );
};

const getTargetUrl = (req: NextRequest) => {
  const endpoint = req.nextUrl.searchParams.get('endpoint');
  if (!endpoint) return null;
  return `${BASE_API_URL}${endpoint}`;
};

export async function GET(req: NextRequest) {
  const targetUrl = getTargetUrl(req);
  if (!targetUrl) {
    return NextResponse.json(
      { error: 'Missing endpoint query parameter' },
      { status: 400 },
    );
  }

  const token = getTokenFromCookies(req);
  const queryParams = Object.fromEntries(req.nextUrl.searchParams.entries());
  delete queryParams.endpoint;

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      params: queryParams,
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (err: any) {
    console.error(`[GET ${targetUrl}]`, err.message);
    return NextResponse.json(
      { error: err.message },
      { status: err.response?.status || 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  console.log("PUT REQUEST")
  return handleWithBody(req, 'post');
}

export async function PUT(req: NextRequest) {
  return handleWithBody(req, 'put');
}

export async function PATCH(req: NextRequest) {
  return handleWithBody(req, 'patch');
}

export async function DELETE(req: NextRequest) {
  return handleWithBody(req, 'delete');
}

// Generic handler for body-based methods
async function handleWithBody(
  req: NextRequest,
  method: 'post' | 'put' | 'patch' | 'delete',
) {
  const targetUrl = getTargetUrl(req);
  if (!targetUrl) {
    return NextResponse.json(
      { error: 'Missing endpoint query parameter' },
      { status: 400 },
    );
  }

  const token = getTokenFromCookies(req);
  const body = await req.json();

  try {
    const response = await axios({
      method,
      url: targetUrl,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      data: body,
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (err: any) {
    console.error(`[${method.toUpperCase()} ${targetUrl}]`, err.message);
    return NextResponse.json(
      { error: err.message },
      { status: err.response?.status || 500 },
    );
  }
}

// export async function GET(Request) {
//   return new Response('This is a new API route');
// }

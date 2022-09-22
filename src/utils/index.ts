interface Params {
  route: string;
  mock?: unknown;
}

export const apiGet = async ({ route, mock }: Params) => {
  if (process.env.NODE_ENV === 'test') {
    return mock;
  }

  const response = await fetch(`https://joaopaulocmarra.npkn.net/sandbox${route}`);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return await response.json();
};

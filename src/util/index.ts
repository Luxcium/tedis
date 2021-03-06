export function sleep(seconds: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export const config = {
  port: 6379,
  host: "127.0.0.1",
  password: "tedis_love_you",
};

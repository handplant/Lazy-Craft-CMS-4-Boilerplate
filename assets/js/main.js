import 'lazysizes';
import Alpine from 'alpinejs';

console.log('Hello World');

Alpine.data('counter', () => ({
  count: 0,
  fetch() {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query CountQuery {
            entryCount(section: "news")
          }
          `,
        variables: {},
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        this.count = result.data.entryCount;
        console.log(result.data.entryCount);
      });
  },
}));

Alpine.start();

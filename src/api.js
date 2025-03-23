import { GraphQLClient, gql } from 'graphql-request';

const hygraphEndpoint = 'https://us-west-2.cdn.hygraph.com/content/cm8j8aq2505po07w67p0hxruu/master'; // HygraphのAPIエンドポイント
const hygraphToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDI3MDgwMjAsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY204ajhhcTI1MDVwbzA3dzY3cDBoeHJ1dS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYzc5NzU5YzMtYWY1Zi00ZjZkLWJiM2UtNTIxMjk4YTQ1MmJlIiwianRpIjoiY204bDdjeWk0MHE2djA2bHI0OGtkM2owcSJ9.MRd9Xgg05D6ylnPp8kjgIOzeQ5PyxTlg8mKSxEB1EoCztx_CYClnsTDKd_oO8E4v8BzdQESed9bCjJQB8FFawlp9qr_72knNPFWZ01aRsix8NJ0e9SOzqqOjHADCYB7rMv1w_MBHQmogw04CcxUXhT_mT92uof_T9vu0Afwxck6saq5jGmGMqBTcZ9u2pqvZ5WYFW7nbpGwZANrAxeNnhwS-T4N9hsAaitm_nL_QAj5i4_X8mFUWgIncTzKXNY4Hkw6OYlq0NfDpGmx3qj-DEibTblZSfIj2A8DVStMeY-a1HLTblC3jtwri-PuT2zdxDeuhJ0s5GA698GoLQantaTTEvR5MyD4zQw8UIb7J3AhpN8OK4KXAnmAj-yBD0w7Mu-Ip4nGpHuE35fQiWZMSgNWFIcySU_Q_iCzU0cYHybqn3iPUF4m2pdD315tQhPRs3NsKiWNToYVWo4Mp5AHTJWQtIJTh_-nAyiVAbuWE2Wgwe0jtvBPdxqd_9TGR5PpALDEjgfgq8Db_x2CoPauj8sgcaRRVwQclQbIHcHWiOoa_ldMyCAlPLFsBJAtlgfMocJd1WrnD7rOnDOxVzBl20NusIi_GWlG4iEAMVb7iIzR4eppdyHVKrD3ASIIU3-O4xYzaWenifUAORlwPQswRI1aRjQaDW1v_tpQEAmUi_N0'; // HygraphのAPIトークン

const client = new GraphQLClient(hygraphEndpoint, {
  headers: {
    authorization: `Bearer ${hygraphToken}`,
  },
});

export const fetchContent = async () => {
  const query = gql`
    query GetContent($where: DemoModel23Mar20250452WhereUniqueInput!) {
      values: demoModel23Mar20250452(where: $where) {
        title
        subtitle
        content {
          json
        }
      }
    }
  `;

  const variables = {
    where: {
      id: "cm8l6ac3ptje507lkcbupj6pa"
    }
  };

  const data = await client.request(query, variables);
  return data.values;
};

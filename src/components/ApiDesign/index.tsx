import HttpMethods from './HttpMethods';
import StatusCodes from './StatusCodes';
import UrlDesign from './UrlDesign';
import AuthAndSecurity from './AuthAndSecurity';
import RestConcepts from './RestConcepts';

function ApiDesign() {
  return (
    <>
      <h2>REST API Design</h2>
      <hr />
      <HttpMethods />
      <hr />
      <StatusCodes />
      <hr />
      <UrlDesign />
      <hr />
      <AuthAndSecurity />
      <hr />
      <RestConcepts />

      {/* TODO: GraphQL */}
    </>
  );
}

export default ApiDesign;

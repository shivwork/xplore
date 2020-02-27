import React, { Suspense } from "react";
import { UserName } from "../hoc/FunComponent";
const SuspenseLoader = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <UserName name="Suspense" />
    </Suspense>
  </div>
);
export { SuspenseLoader };

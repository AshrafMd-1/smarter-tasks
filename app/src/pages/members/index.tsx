import React, { Suspense } from "react";

const MemberList = React.lazy(() => import("./MemberList.tsx"));
import NewMember from "./NewMember.tsx";
import ErrorBoundary from "../../components/ErrorBoundary.tsx";

const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Members;

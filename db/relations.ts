import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const userRelations = defineRelations(schema, (r) => ({
  user: {
    session: r.many.session(),
    account: r.many.account(),
  },
}));

export const sessionRelations = defineRelations(schema, (r) => ({
  session: {
    user: r.one.user({
      from: r.session.userId,
      to: r.user.id,
    }),
  },
}));

export const accountRelations = defineRelations(schema, (r) => ({
  account: {
    user: r.one.user({
      from: r.account.userId,
      to: r.user.id,
    }),
  },
}));

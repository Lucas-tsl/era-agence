import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Webhook Sanity : à chaque publication, invalide le cache du type modifié.
 * À configurer dans sanity.io/manage › API › Webhooks avec la projection `{_type}`.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET manquant" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<{ _type?: string }>(request, secret, true);
  if (!isValidSignature) {
    return NextResponse.json({ message: "Signature invalide" }, { status: 401 });
  }
  if (!body?._type) {
    return NextResponse.json({ message: "Type de document manquant" }, { status: 400 });
  }

  revalidateTag(body._type, "max");
  return NextResponse.json({ revalidated: body._type });
}

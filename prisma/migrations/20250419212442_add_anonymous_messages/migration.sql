-- CreateTable
CREATE TABLE "anonymous_messages" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anonymous_messages_pkey" PRIMARY KEY ("id")
);

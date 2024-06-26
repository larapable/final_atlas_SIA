import { NextResponse } from "next/server";
import LearningGrowthEntity from "/models/stratmap/learningGrowth.js";

export async function POST(req) {
  try {
    const { input, department_id } = await req.json();

    console.log("Input: ", input);

    const success = await LearningGrowthEntity.postLGEntity(input, department_id);

    if (success) {
      return NextResponse.json({ message: "Financial entity registered." }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "An error occurred while registering the financial entity." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the financial entity." },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const { id, input, department_id } = await req.json();
    console.log("Input: ", input);
    const success = await LearningGrowthEntity.updateLGEntity(id, input, department_id);
    if (success) {
      return NextResponse.json({ message: "Financial entity updated." }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "An error occurred while updating the financial entity." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while updating the financial entity." },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const success = await LearningGrowthEntity.deleteLGEntity(id);
    if (success) {
      return NextResponse.json({ message: "Financial entity deleted." }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "An error occurred while deleting the financial entity." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while deleting the financial entity." },
      { status: 500 }
    );
  }
}

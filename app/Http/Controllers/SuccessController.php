<?php

namespace App\Http\Controllers;

use App\Models\CategorySuccess;
use App\Models\Success;
use App\Models\SuccessUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SuccessController extends Controller
{
    public function index(): \Inertia\Response
    {
        $success = Success::query()->get();

        $allCategory = CategorySuccess::query()->get();

        return Inertia::render('AdminSuccess', [
            "success" => $success,
            'allCategory' => $allCategory
        ]);
    }

    public function create(Request $request): \Illuminate\Http\RedirectResponse
    {
        $success = Success::query()->get();
        $name = $request->name;
        $description = $request->description;
        $icon = $request->icon;
        $categoryId = $request->category_id;
        $countToHave = $request->count_to_have;

        $iconName = time() . '.' . $icon->getClientOriginalExtension();
        $icon->move(public_path('uploads'), $iconName);

        Success::query()
            ->create([
                "name" => $name,
                "description" => $description,
                "icon" => $iconName,
                'category_successes_id' => $categoryId,
                'count_to_have' => $countToHave
            ]);

        return back()->with([["success" => $success]]);
    }

    public function showMySuccess(): \Inertia\Response
    {
        $user = auth()->user();

        $success = SuccessUser::with('success')->where('user_id', $user->id)->get();

        return Inertia::render('MySuccess', ["successUsers" => $success]);
    }
}

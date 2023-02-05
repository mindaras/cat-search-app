import { debounce } from "@common/helpers/debounce";
import { wait } from "@testUtils/helpers/wait";

describe("debounce", () => {
  it("invokes a callback after a timeout", async () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 300);

    debouncedCallback();

    expect(callback).not.toHaveBeenCalled();

    await wait(300);

    expect(callback).toHaveBeenCalled();
  });

  it("debounces a call", async () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 300);

    debouncedCallback();

    expect(callback).not.toHaveBeenCalled();

    await wait(150);

    debouncedCallback();

    await wait(150);

    expect(callback).not.toHaveBeenCalled();

    await wait(150);

    expect(callback).toHaveBeenCalled();
  });
});

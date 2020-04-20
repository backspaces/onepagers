import util from 'https://backspaces.github.io/agentscript/src/util.js'
import TwoDraw from 'https://backspaces.github.io/agentscript/tests/TwoDraw.js'

// init and run the model 500 steps, 30 fps, async (don't block browser)

export default async function run(Model, viewOptions = {}, drawOptions = {}) {
    const model = new Model()

    await model.startup()
    model.setup()

    // Create the TwoView using modelDiv
    const twoDraw = new TwoDraw(model, viewOptions)

    // Push several properties to window from inside this module.
    util.toWindow({ model, util })

    await util.timeoutLoop(
        () => {
            model.step()
            model.tick()

            twoDraw.draw(drawOptions)
        },
        500,
        33
    )

    // Print out a sample of the model.
    // Not needed for drawing but useful.
    const sample = util.sampleModel(model)
    console.log('done, sample', sample)
    util.printToPage(sample, 'textDiv')
}

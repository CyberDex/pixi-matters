import { Engine, Runner } from 'matter-js';
import { RoundMatterBody } from '../RoundMatterBody';
import { argTypes, getDefaultArgs } from './utils/argTypes';
import { Container } from '@pixi/display';

const args = {
    restitution: 1
};

type Args = typeof args;

class Story
{
    view = new Container();
    engine: Engine;
    body: RoundMatterBody;

    constructor(props: Args)
    {
        // Step 1: create matterJS engine
        this.engine = Engine.create();

        // Step 2: create hybrid pixiJS-matterJS body component
        this.body = new RoundMatterBody(
            this.engine.world, // pass matterJS world as parameter
            {
                x: window.innerWidth / 2,
                y: -20,
                radius: 20,
            }, {
                restitution: props.restitution,
            });

        // by default, body will be destroyed and removed form the world when it falls off the screen
        // we are disabling it here as we will reset the body position manually in the update loop
        this.body.disableSelfCleanup = true;

        const leftBody = new RoundMatterBody(this.engine.world, {
            x: (window.innerWidth / 2) - 30,
            y: window.innerHeight / 2,
            radius: 20,
        }, {
            isStatic: true,
        });

        const rightBody = new RoundMatterBody(this.engine.world, {
            x: (window.innerWidth / 2) + 30,
            y: window.innerHeight / 2,
            radius: 20,
        }, {
            isStatic: true,
        });

        // Step 3: Add hybrid pixiJS-matterJS body to the stage
        this.view.addChild(this.body, leftBody, rightBody);

        // Step 4: Run matterJS engine
        Runner.run(this.engine);
    }

    update()
    {
        if (!this.body) return;

        if (this.body.y > window.innerHeight)
        {
            this.body.resetPosition(window.innerWidth / 2, -20);
        }
    }
}

export const roundMatterBody = (params: any) => new Story(params);

export default {
    title: 'Basic',
    argTypes: argTypes(args),
    args: getDefaultArgs(args)
};
